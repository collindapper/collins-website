class StaticPagesController < ApplicationController
  def home 
    render 'home'
  end

  def about
    render 'about'
  end

  def projects
    @data = { username: params[:username] }.to_json
    render 'projects'
  end

  def skills
    render 'skills'
  end

  def contact
    render 'contact'
  end

  def add_project
    render 'add_project'
  end

  def login
    render 'login'
  end
  
end