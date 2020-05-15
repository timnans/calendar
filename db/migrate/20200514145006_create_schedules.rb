class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.integer :calendarId
      t.string :title
      t.string :category
      t.datetime :dueDateClass
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
