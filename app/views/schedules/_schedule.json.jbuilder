json.extract! schedule, :id, :calendarId, :title, :category, :dueDateClass, :start, :end, :created_at, :updated_at
json.url schedule_url(schedule, format: :json)
