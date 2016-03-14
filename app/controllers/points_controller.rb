class PointsController < ApplicationController

  def new
    @total_points = Array.new

    Status.all.each do |status|

    unless status.state.eql? "pending"

      if status.user_name?

        # User exists in @total_points hash, update the points
        if @total_points.any? {|h| h[:user_name] == status.user_name }
          @user = @total_points.find {|h| h[:user_name] == status.user_name }
          if status.state.eql? "success"
            @user[:points] += 10
          else
            @user[:points] -= 10
          end
        else
          # User doesnt exist - initialize hash
          @hash = Hash.new
          @hash[:user_name] = status.user_name
          @hash[:avatar_url] = status.avatar_url
          @hash[:points] = 0

          if status.state.eql?("success")
            @hash[:points] += 10
          else
            @hash[:points] -= 10
          end

          # Add to Array
          @total_points.push(@hash)
        end
      end

      end

    end

    render json: @total_points

  end

end
