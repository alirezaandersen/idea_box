class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :quality, presence: true

  default_scope { order(created_at: :desc) }

  def self.upvote(id)
    quality_id = self.idea_quality(id)

    new_quality_id = quality_id < 2 ? quality_id + 1 : 2
    new_quality = qualities.fetch(new_quality_id,2)
    self.find(id).update(quality: new_quality)
  end

  def self.downvote(id)
    quality_id = self.idea_quality(id)

    new_quality_id = quality_id < 2 ? quality_id - 1 : 1
    new_quality = qualities.fetch(new_quality_id,2)
    self.find(id).update(quality: new_quality)
  end

  private

  def self.idea_quality(id)
    quality = self.find(id).quality

    qualities.index(quality)
  end

  def self.qualities
    ['swill','plausible','genius']
  end
end
