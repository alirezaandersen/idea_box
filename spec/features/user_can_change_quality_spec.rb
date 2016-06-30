require 'rails_helper'

RSpec.feature 'User can change the quality of an idea' do
  xcontext 'when clicking on thumbs up' do
    scenario 'the idea quality goes up', js: true do
      create(:idea)

      visit root_path
      find('.upvote').click

      expect(page).to have_content('plausible')

      visit root_path

      expect(page).to have_content('plausible')
    end
  end

  xcontext 'when clicking on thumbs down' do
    scenario 'the idea quality goes down', js: true do
      create(:idea, quality: 'genius')

      visit root_path
      find('.downvote').click

      expect(page).to have_content('plausible')

      visit root_path

      expect(page).to have_content('plausible')
    end
  end
end
