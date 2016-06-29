class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :quality, presence: true

  default_scope { order(created_at: :desc) }
  # enum ['swill', 'plausible', 'genius']
  def self.upvote(id)
    quality = self.find(id).quality
    quality_id = qualities.index(quality)
    new_quality_id = quality_id < 2 ? quality_id + 1 : 2
    new_quality = qualities.fetch(new_quality_id,2)
    self.find(id).update(quality: new_quality)
  end

  def self.downvote(id)

  end

  private

  def self.qualities
    ['swill','plausible','genius']
  end

  # "swill" → "plausible", "plausible" → "genius"
end
