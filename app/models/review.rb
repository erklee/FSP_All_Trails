# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  rating     :integer          not null
#  user_id    :bigint           not null
#  trail_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :trail_id, :rating, :review, presence: true
    validates :rating, inclusion: {in: 1..5, message: "Rating must be selected"}
    validates :review, length: {in: 3...250, message: "Review must be between 3 and 250 characters"}

    belongs_to :user
    belongs_to :trail
end
