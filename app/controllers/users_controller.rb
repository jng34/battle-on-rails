class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: User.all
    end
end
