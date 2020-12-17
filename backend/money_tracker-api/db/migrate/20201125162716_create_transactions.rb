class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :date
      t.string :description
      t.float :amount
      t.string :category
      t.integer :user_id
      

      t.timestamps
    end
  end
end
