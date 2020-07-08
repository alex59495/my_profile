class AddSvgPathToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :svg_path, :string
  end
end
