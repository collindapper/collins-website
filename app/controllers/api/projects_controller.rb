module Api
  class PropertiesController < ApplicationController
    def index
      @projects = Project.order(created_at: :desc)
      return render json: { error: 'not_found' }, status: :not_found if !@projects

      render 'api/projects/index', status: :ok
    end

    def show
      @project = Project.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found if !@project

      render 'api/projects/show', status: :ok
    end

    def create
      token = cookies.signed[:collins_session_token]
      session = Session.find_by(token: token)
      user = session.user
      @project = user.projects.new(project_params)

      if @project.save
        render 'api/projects/create'
      end
    end

    def destroy
      token = cookies.signed[:collins_session_token]
      session = Session.find_by(token: token)

      return render json: { success: false } unless session

      user = session.user
      project = Project.find_by(id: params[:id])

      if project and project.destroy
        render json: {
          success: true
        }
      else
        render json: {
          success: false
        }
      end
    end

    private

      def project_params
        params.require(:project).permit(:title, :description, :date_completed, images: [], :live_url, :github_url)
      end

  end
end