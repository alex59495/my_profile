class PagesController < ApplicationController
  def home
    # Verify the skill in the seed
    @skills = Skill.all
    @levels = ["good", "medium", "basic"]
  end
end
