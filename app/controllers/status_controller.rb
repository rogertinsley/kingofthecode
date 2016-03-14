class StatusController < BaseApiController
   skip_before_filter :verify_authenticity_token

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
end
