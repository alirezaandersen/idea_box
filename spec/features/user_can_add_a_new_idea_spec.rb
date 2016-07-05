require 'rails_helper'

RSpec.feature 'User can add a new idea' do
  scenario 'they see the newely created idea', js: true do
    create(:idea)
    title = 'Sample Title'
    body = 'Sample Body'

    visit root_path
    save_and_open_page
    click_button "New"
    fill_in 'title', with: title
    fill_in 'body',  with: body
    click_button('Save')

      expect(page).to have_content(title)
      expect(page).to have_content(body)

    saved_database_idea = Idea.first

    expect(saved_database_idea.title).to eq(title)
    expect(saved_database_idea.body).to eq(body)

    # Idea is still present on reload
    visit root_path

      expect(page).to have_content(title)
      expect(page).to have_content(body)
  end
end
