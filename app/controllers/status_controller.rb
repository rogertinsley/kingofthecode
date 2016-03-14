class StatusController < ApplicationController
   skip_before_filter :verify_authenticity_token
   before_filter :parse_request, :only => :create

  # GET /status.json
  def index
    render json:Status.all
  end

  # POST /status.json
  def create
    @status = Status.new
    @status.assign_attributes(name: @json['name'], context: @json['context'], description: @json['description'], state: @json['state'], user_name: @json['sender']['login'], avatar_url: @json['sender']['avatar_url'])
    if @status.save
     render json: @status
    else
      render nothing: true, status: :bad_request
    end
   end

   private
      def parse_request
        @json = JSON.parse(request.body.read)
      end
   end
