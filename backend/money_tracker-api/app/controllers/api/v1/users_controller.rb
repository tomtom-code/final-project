class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]
    
    def index
        @users = User.all
        render json: @users
    end

    def profile
        render json: { user: UserSerializer.new(current_user)}, status: :accepted
        
    end

    

    def create
        user = User.create!(user_params)

        if user.valid?
            render json: { user: user, status: :created}
        else
            render json: { error: 'failed to create user', status: :not_acceptable}
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
        
    end
     
    
    def get_user
        user = self.current_user
        render json: user
    end


    private
    def user_params
        params.require(:user).permit(:name, :password, :email)
    end
end
