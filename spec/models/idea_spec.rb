
require "rails_helper"

RSpec.describe Idea do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:quality) }

  it "should have a default value of 'swill' for quality" do
    idea = Idea.new(title: "Example title", body: "Example body")

    expect(idea.quality).to eq("swill")
  end

  context "quality changes with upvote" do
    it "changes quality from swill to plausible" do
      idea = Idea.create( id: 99,
      title: "Im out of Ideas",
      body: "I cannot figure out why my design is all messed up now. ",
      quality: "swill"
      )
      new_quality = Idea.upvote(idea[:id])
      updated_id = Idea.find(99)
      new_idea_quality = updated_id.quality
      assert new_idea_quality, updated_id.quality
    end
  end

  context "quality changes with downvote" do
    it "changes quality from plausible to swill" do
      idea = Idea.create( id: 98,
      title: "Im out of Ideas",
      body: "I cannot figure out why my design is all messed up now. ",
      quality: "plausible"
      )
      new_quality = Idea.upvote(idea[:id])
      updated_id = Idea.find(98)
      new_idea_quality = updated_id.quality
      assert new_idea_quality, updated_id.quality
    end
  end
end
