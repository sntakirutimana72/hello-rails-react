class Message < ApplicationRecord
  def self.any
    order('RANDOM()').first
  end
end
