class Idea < ActiveRecord::Base
  validates :title, presence: true
  validates :body, presence: true
  validates :quality, presence: true

  default_scope { order(created_at: :desc) }

  def upvote(id)

  end

  def downvote(id)

  end

  # "swill" → "plausible", "plausible" → "genius"
end
