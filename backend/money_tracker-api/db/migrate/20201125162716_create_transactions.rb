class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.string :date
      t.float :amount
      t.string :category
      t.integer :account_id

      t.timestamps
    end
  end
end
