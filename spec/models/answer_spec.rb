require 'rails_helper'

RSpec.describe Answer, type: :model do
  it "is invalid with no attributes" do
    expect(Answer.new).to be_invalid
  end
end
