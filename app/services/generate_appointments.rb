class GenerateAppointments 
	def self.build
		new
	end

	def call(weeksFromNow, addresses)		
		t1 = Date.today.to_time
		t2 = weeksFromNow.weeks.from_now.to_time

		100.times do |x| 
			randomTime = Time.at((t2.to_f - t1.to_f)*rand + t1.to_f)
			randomAddress = addresses.sample[:address]
			Appointment.create(address: randomAddress, scheduled_at: randomTime)
		end
	end
end