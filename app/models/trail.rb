# == Schema Information
#
# Table name: trails
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  location    :string           not null
#  difficulty  :string           not null
#  length      :float            not null
#  lat         :float            not null
#  lon         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Trail < ApplicationRecord
    validates :name, :description, :location, :difficulty, :length, presence: true
    validates :name, uniqueness: { case_sensitive: false }
    validates :name, :location, :difficulty, length: { minimum: 3}
    validates :lon, :lat, presence: true
    validates :description, length: { minimum: 25}
    validates :length, numericality: { greater_than: 0 }
    validates :location, format: { with: /\A[a-zA-Z\s]+\z/, message: "only allows letters and spaces" }
    validates :difficulty, inclusion: { in: %w( Easy Moderate Hard)}

    def self.search_names(query)
        where("lower(name) LIKE ?", "%#{sanitize_sql_like(query.downcase)}%")
      end

    has_one_attached :photo
end
