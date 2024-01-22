class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)
    end

    def update

    end

    def destroy

    end

    private
    def review_params
        params.require(:review).permit(:user_id, :trail_id, :rating)
    end

end
