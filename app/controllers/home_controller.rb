class HomeController < ApplicationController
	before_action :authenticate_user!
	def index
		ability = Ability.new(current_user)
		if (ability.can? :manage, :all)
			@hasAdminPriveleges = true
		end
	end

	def createFiftyAppointments
		
	end
end