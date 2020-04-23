class CreateAnswers < ActiveRecord::Migration[6.0]
  def change
    create_table :answers do |t|
      t.text :statement
      t.bigint :display_order, default: 0, null: false
      t.integer :answer_type, default: 0, null: false

      t.timestamps
    end
  end
end
