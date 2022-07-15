class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        render json: User.all
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        stats = @current_user.update!(stat_params)
        render json: stats, status: :ok
    end

    def destroy
        userItem = @current_user.power.find(params[:id])
        userItem.destroy
        render json: userItem, status: :destroyed
    end


    private
    def stat_params
        params.permit(:base_hp, :base_str)
    end
    def user_params
        params.permit(:name, :profile_img, :password, :password_confirmation)
    end
end
