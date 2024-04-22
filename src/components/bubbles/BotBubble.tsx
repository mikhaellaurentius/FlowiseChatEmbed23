return (
    // Modification from here
    <div class="flex flex-row justify-start mb-2 items-center host-container" style={{ 'margin-right': '50px' }}>
      {/* Modification until here
    <div class="flex flex-col justify-start mb-2 items-start host-container" style={{ 'margin-right': '50px' }}> */}
      <Show when={props.showAvatar}>
        <Avatar initialAvatarSrc={props.avatarSrc} />
      </Show>

      {/* Modification from here */}
      {props.message.message && (
        <span
          ref={botMessageEl}
          class="px-4 py-2 ml-2 max-w-full chatbot-host-bubble prose"
          data-testid="host-bubble"
          style={{
            'background-color': props.backgroundColor ?? defaultBackgroundColor,
            color: props.textColor ?? defaultTextColor,
            'border-radius': '6px',
            'font-size': props.fontSize ? `${props.fontSize}px` : `${defaultFontSize}`,
          }}
        />
      )}
      {props.chatFeedbackStatus && props.message.messageId && (
        <>
          <div class="flex items-center px-2">
            <CopyToClipboardButton onClick={() => copyMessageToClipboard()} />
            {rating() === '' || rating() === 'THUMBS_UP' ? (
              <ThumbsUpButton isDisabled={rating() === 'THUMBS_UP'} rating={rating()} onClick={onThumbsUpClick} />
            ) : null}
            {rating() === '' || rating() === 'THUMBS_DOWN' ? (
              <ThumbsDownButton isDisabled={rating() === 'THUMBS_DOWN'} rating={rating()} onClick={onThumbsDownClick} />
            ) : null}
          </div>
          <Show when={showFeedbackContentDialog()}>
            <FeedbackContentDialog
              isOpen={showFeedbackContentDialog()}
              onClose={() => setShowFeedbackContentModal(false)}
              onSubmit={submitFeedbackContent}
              backgroundColor={props.backgroundColor}
              textColor={props.textColor}
            />
          </Show>
        </>
      )}
      {/* Modification until here */}

      {/* {props.message.message && (
        <span
          ref={botMessageEl}
          class="px-4 py-2 ml-2 max-w-full chatbot-host-bubble prose"
          data-testid="host-bubble"
          style={{
            'background-color': props.backgroundColor ?? defaultBackgroundColor,
            color: props.textColor ?? defaultTextColor,
            'border-radius': '6px',
            'font-size': props.fontSize ? `${props.fontSize}px` : `${defaultFontSize}`,
          }}
        />
      )}
      {props.chatFeedbackStatus && props.message.messageId && (
        <>
          <div class="flex items-center px-2">
            <CopyToClipboardButton onClick={() => copyMessageToClipboard()} />
            {rating() === '' || rating() === 'THUMBS_UP' ? (
              <ThumbsUpButton isDisabled={rating() === 'THUMBS_UP'} rating={rating()} onClick={onThumbsUpClick} />
            ) : null}
            {rating() === '' || rating() === 'THUMBS_DOWN' ? (
              <ThumbsDownButton isDisabled={rating() === 'THUMBS_DOWN'} rating={rating()} onClick={onThumbsDownClick} />
            ) : null}
          </div>
          <Show when={showFeedbackContentDialog()}>
            <FeedbackContentDialog
              isOpen={showFeedbackContentDialog()}
              onClose={() => setShowFeedbackContentModal(false)}
              onSubmit={submitFeedbackContent}
              backgroundColor={props.backgroundColor}
              textColor={props.textColor}
            />
          </Show>
        </>
      )} */}
    </div>
  );
};
