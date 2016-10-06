class AppointmentsController < ApplicationController
	before_action :authenticate_user!
	def getMyAppointments
		user = current_user
		weeksFromNow = params[:weeksFromNow].to_i		

		render json: current_user.appointments.where(scheduled_at: Date.today..weeksFromNow.weeks.from_now)
	end

	def getAllAppointments
		weeksFromNow = params[:weeksFromNow].to_i
		
		render json: Appointment.all.where(scheduled_at: Date.today..weeksFromNow.weeks.from_now)
	end

	def runAdminRakeTask
		weeksFromNow = params[:weeksFromNow].to_i
		addresses = GetAddressList.build.call()		
		appointments = GenerateAppointments.build.call(weeksFromNow, addresses)

		render json: true
	end
end