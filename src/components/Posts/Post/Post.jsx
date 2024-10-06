import {
  CardActions as MuiCardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {
  Media,
  Overlay,
  Overlay2,
  Details,
  Title,
  Card as StyledCard,
} from './styles';

const Post = ({ post }) => {
  return (
    <StyledCard>
      <Media image={post.selectedFile} title={post.title} />
      <Overlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </Overlay>
      <Overlay2>
        <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Overlay2>
      <Details>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Details>
      <CardContent>
        <Title>
          <Typography variant="h5" gutterBottom>{post.message}</Typography>
        </Title>
      </CardContent>
      <MuiCardActions>
        <Button size="small" color="primary" onClick={() => { }}>
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => { }}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </MuiCardActions>
    </StyledCard>
  );
};

export default Post;
