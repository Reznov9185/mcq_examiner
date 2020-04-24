require 'rails_helper'

RSpec.describe Course, type: :model do
  it "is invalid with no attributes" do
    expect(Course.new).to be_invalid
  end

  it "is valid with valid attributes" do
    expect(Course.new(name: "testname")).to be_valid
  end
end
