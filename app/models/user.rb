class User < ActiveRecord::Base
	has_many :appointments
	rolify
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	     :recoverable, :rememberable, :trackable, :validatable

	validates_uniqueness_of :telephone
	validates_format_of :telephone, :with => /\A(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}\z/

	def email_required?
		false
	end

	def email_changed?
		false
	end

end
