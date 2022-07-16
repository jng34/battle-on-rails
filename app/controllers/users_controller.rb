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
        user = User.find(params[:id])
        user.update!(stat_params)
        render json: user, status: :ok
    end

    def destroy
        user = user.find(params[:id])
        user.destroy
        render json: user, status: :ok
    end


    private

    def stat_params
        params.permit(:base_hp, :base_str, :total_hp, :total_str)
    end

    def user_params
        params.permit(:name, :profile_img, :password, :password_confirmation)
    end
end
