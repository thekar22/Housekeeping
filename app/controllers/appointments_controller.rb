class AppointmentsController < ApplicationController
	before_action :authenticate_user!
	def getMyAppointments
		user = current_user
		weeksFromNow = params[:weeksFromNow].to_i

		appointments = current_user.appointments.where(scheduled_at: Date.today.to_time..weeksFromNow.weeks.from_now.to_time)
		appointments = appointments.sort_by &:scheduled_at

		render json: appointments
	end

	def getAllAppointments
		weeksFromNow = params[:weeksFromNow].to_i

		appointments = Appointment.all.where(scheduled_at: Date.today.to_time..weeksFromNow.weeks.from_now.to_time, user_id: nil).sort_by &:scheduled_at
		appointments = appointments.sort_by &:scheduled_at
	
		render json: appointments
	end

	def assignAppointment
		id = params[:appointmentId]
		appointment = Appointment.find(id)
		current_user.appointments << appointment
		render json: appointment.start_at = Time.now
	end

	def startAppointment
		id = params[:appointmentId]
		appointment = Appointment.find(id)
		if current_user.id.eql? appointment.user_id
			appointment.start_at = Time.now
			appointment.save
		end
		render json: appointment
	end

	def finishAppointment
		id = params[:appointmentId]
		appointment = Appointment.find(id)
		if current_user.id.eql? appointment.user_id
			appointment.end_at = Time.now
			appointment.save
		end
		render json: appointment
	end

	def runAdminRakeTask
		weeksFromNow = 3
		addresses = GetAddressList.build.call()		
		appointments = GenerateAppointments.build.call(weeksFromNow, addresses)

		render json: true
	end
end