class StaticPagesController < ApplicationController
  def home 
    render 'home'
  end

  def about
    render 'about'
  end

  def projects
    render 'projects'
  end

  def skills
    render 'skills'
  end

  def cyber
    render 'cyber'
  end
  
end