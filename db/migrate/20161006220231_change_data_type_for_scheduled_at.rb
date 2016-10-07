class ChangeDataTypeForScheduledAt < ActiveRecord::Migration
  def up
    remove_column :appointments, :scheduled_at
    add_column :appointments, :scheduled_at, :time
  end

  def down
    remove_column :appointments, :scheduled_at
    add_column :appointments, :scheduled_at, :date
  end

end
