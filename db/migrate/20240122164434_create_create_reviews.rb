class CreateCreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :create_reviews do |t|
      t.text :review, null: false
      t.integer :rating, null: false
      t.references :user, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true
      t.timestamps
    end
  end
end
