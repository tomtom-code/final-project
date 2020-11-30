class Api::V1::AccountsController < ApplicationController

    def index
        accounts = Account.all
        render json: accounts
    end

    def show
        account = Account.find(params[:id])
        render json: account
    end

    def create
        account = Account.create!(account_params)
        render json: account

    end

    def update
        account = Account.find(params[:id])
        account.update(account_params)
        render json: account
    end

    def destroy
        account = Account.find(params[:id])
        account.destroy
        render json: account
        
    end

    private
    def account_params
        params.require(:account).permit(:name,:balance,:user_id)

    end
end
