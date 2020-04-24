class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.text :statement
      t.decimal :marks
      t.bigint :display_order, default: 0, null: false

      t.timestamps
    end
  end
end
