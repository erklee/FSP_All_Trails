# == Schema Information
#
# Table name: create_reviews
#
#  id         :bigint           not null, primary key
#  review     :text             not null
#  rating     :integer          not null
#  user_id    :bigint           not null
#  trail_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CreateReview < ApplicationRecord
    validates :user_id, :trail_id, :rating, :review presence: true
    validates :rating, inclusion: {in: 1..5, message: "Rating must be selected"}

    belongs_to :user
    belongs_to :trail
end
