class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.belongs_to :user, index: true, foreign_key: true

      t.string :address
      t.date :scheduled_at
      t.time :start_at
      t.time :end_at 

      t.timestamps null: false
    end
  end
end