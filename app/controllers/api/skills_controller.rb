module Api
  class SkillsController < ApplicationController
    def index
      @skills = Skill.order(created_at: :desc)
      return render json: { error: 'not_found' }, status: :not_found if !@skills

      render 'api/skills/index', status: :ok
    end

    def create
      token = cookies.signed[:collins_session_token]
      session = Session.find_by(token: token)
      user = session.user
      @skill = user.skills.new(skill_params)

      if @skill.save
        render 'api/skills/create'
      end
    end

    def destroy
      token = cookies.signed[:collins_session_token]
      session = Session.find_by(token: token)

      return render json: { success: false } unless session

      user = session.user
      skill = Skill.find_by(id: params[:id])

      if skill and skill.destroy
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

      def skill_params
        params.require(:skill).permit(:title, :certification_url, :linkedin_url)
      end

  end
end
