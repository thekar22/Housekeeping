class ChangeDataTypeAgainForScheduledAt < ActiveRecord::Migration
  def up
    remove_column :appointments, :scheduled_at
    add_column :appointments, :scheduled_at, :datetime
  end

  def down
    remove_column :appointments, :scheduled_at
    add_column :appointments, :scheduled_at, :time
  end

end
