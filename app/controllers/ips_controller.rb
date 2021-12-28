# frozen_string_literal: true

class IpsController < ApplicationController
  before_action :set_ip, only: %i[destroy]

  def index
    @ips = Ip.all.order(created_at: :desc)
    render json: @ips
  end

  def create
    new_info = get_ip_info(params[:ip])
    return render json: { error: { message: new_info } } if new_info.is_a? String

    @ip_info = Ip.new(new_info)

    if @ip_info.save
      render json: @ip_info, status: :created
    else
      render json: @ip_info.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ip.destroy
  end

  private

  def set_ip
    @ip = Ip.find(params[:id])
  end

  def ip_params
    params.permit(:ip, :city, :region, :country, :country_name, :country_code, :country_capital,
                  :postal, :latitude, :longitude, :timezone, :country_calling_code, :currency, :currency_name)
  end
end
