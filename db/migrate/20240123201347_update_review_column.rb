class UpdateReviewColumn < ActiveRecord::Migration[7.0]
  def change
    drop_table :reviews 
    create_table :reviews do |t|
      t.text :content, null: false
      t.integer :rating, null: false
      t.references :user, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true
      t.timestamps
    end
  end
end
