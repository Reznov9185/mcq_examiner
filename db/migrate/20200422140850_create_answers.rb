class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.text :statement
      t.integer :display_order
      t.integer :answer_type

      t.timestamps
    end
  end
end
