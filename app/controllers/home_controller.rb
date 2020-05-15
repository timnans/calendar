class HomeController < ApplicationController
  def index

    @schedules = Schedule.all
  end
end
