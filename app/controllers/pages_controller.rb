class PagesController < ApplicationController
  def home
    # Verify the skill in the seed
    @skills = Skill.all
    @levels = ["good", "medium", "basic"]
    if locale == :en
      @languages = {
        French: :fr,
        Portuguese: :pt
      }
    elsif locale == :fr
      @languages = @languages = {
        Anglaise: :en,
        Portugaise: :pt
      }
    else
      @languages = {
        Inglês: :en,
        Francês: :fr
      }
    end
  end
end
