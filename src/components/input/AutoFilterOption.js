const AutoFilterOption = ({ options, highlightText, onChangeOption }) => {
  const getHighlightOptionText = (option) => {
    return option?.replaceAll(
      new RegExp(`(${highlightText})`, "ig"),
      `<b>$1</b>`
    );
  };

  return (
    <div>
      {options?.map((option, index) => (
        <span
          key={`filter-option-${index}`}
          dangerouslySetInnerHTML={{
            __html: getHighlightOptionText(option),
          }}
          className="d-block p-1"
          onClick={() => onChangeOption(option)}
        />
      ))}
    </div>
  );
};

export default AutoFilterOption;
