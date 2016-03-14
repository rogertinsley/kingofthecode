class PointsController < ApplicationController

  def new
    @total_points = Hash.new

    Status.all.each do |status|

    unless status.state.eql? "pending"

      if status.user_name?

        # User exists in @total_points hash, update the points
        if @total_points.has_key? status.user_name
          if status.state.eql? "success"
            @total_points[status.user_name][:points] += 10
          else
            @total_points[status.user_name][:points] -= 10
          end
        else
          # User doesnt exist - initialize hash
          @total_points[status.user_name] = Hash.new
          @total_points[status.user_name][:avatar_url] = status.avatar_url
          @total_points[status.user_name][:points] = 0

          if status.state.eql?("success")
            @total_points[status.user_name][:points] += 10
          else
            @total_points[status.user_name][:points] -= 10
          end
        end
      end

      end

    end

    render json: @total_points

  end

end
