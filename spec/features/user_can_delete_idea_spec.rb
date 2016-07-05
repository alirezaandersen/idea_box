require 'rails_helper'

RSpec.feature 'User can delete an idea' do
  it 'removes the idea from the list', js: true do
    idea1 = create(:idea)
    idea2 = create(:idea)

    visit root_path

    first('#ideas').click_button('Delete')

    expect(page).to_not have_content(idea2.title)
    expect(page).to_not have_content(idea2.body)
  end
end
