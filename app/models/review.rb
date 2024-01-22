class Review < ApplicationRecord
    validates :user_id, :trail_id, :rating, :review, presence: true
    validates :rating, inclusion: {in: 1..5, message: "Rating must be selected"}

    belongs_to :user
    belongs_to :trail
end