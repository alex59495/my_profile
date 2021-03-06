class PagesController < ApplicationController
  def home
    # Verify the skill in the seed
    @levels = ["good", "medium", "basic"]
    if locale == :en
      @languages = {
        French: :fr,
        Portuguese: :pt
      }
    elsif locale == :fr
      @languages = @languages = {
        Anglaise: nil,
        Portugaise: :pt
      }
    else
      @languages = {
        Inglês: nil,
        Francês: :fr
      }
    end
    @score = 95
  end
end
